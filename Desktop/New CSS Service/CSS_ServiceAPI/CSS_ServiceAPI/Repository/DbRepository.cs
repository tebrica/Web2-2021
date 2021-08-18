using CSS_ServiceAPI.Models;
using CSS_ServiceAPI.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Repository
{
    public class DbRepository : IRepository
    {
        string connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
        public IEnumerable<City> GetCities()
        {
            List<City> gradovi = new List<City>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acPost,acName,acRegion FROM [Base].[dbo].[tHE_SetPostCode]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                string acPost = sdr["acPost"].ToString();
                string acName = sdr["acName"].ToString();
                string acRegion = sdr["acRegion"].ToString();
                City city = new City() { AcPost = acPost, AcCityName = acName, AcOkrugName = acRegion };
                gradovi.Add(city);
            }
            return gradovi;
        }

        public IEnumerable<Clerk> GetClerks()
        {
            List<Clerk> clerks = new List<Models.Clerk>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acSubject,acName,acSurname FROM [Base].[dbo].[tHE_SetSubjContact]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                string subject = sdr["acSubject"].ToString();
                string name = sdr["acName"].ToString();
                string lastname = sdr["acSurname"].ToString();
                Clerk clerk = new Models.Clerk() { Subject = subject, Name = name, LastName = lastname };
                clerks.Add(clerk);
            }
            return clerks;
        }

        public PriceDTO GetCurrentPriceForNarudzbina(string acKey)
        {
            PriceDTO dto = new PriceDTO() { anForPay = 0, anValue = 0 };

            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand($"SELECT anValue,anForPay FROM [Base].[dbo].[tHE_Order] WHERE acKey='{acKey}'", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            sdr.Read();

            dto.anValue = Double.Parse(sdr["anValue"].ToString());
            dto.anForPay = Double.Parse(sdr["anForPay"].ToString());

            return dto;
        }

        public AllDataDTO GetEntireCollection()
        {
            AllDataDTO dto = new AllDataDTO();
            dto.subjekti = GetSubjekti();
            dto.identi = GetIdenti();
            dto.narudzbine = GetNarudzbine();
            dto.narudzbinaItemi = GetNarudzbinaItems();
            dto.gradovi = GetCities();
            dto.referenti = GetReferenti();
            dto.statusi = GetStatuses();
            return dto;
        }

        public IEnumerable<Ident> GetIdenti()
        {
            List<Ident> identiList = new List<Ident>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acIdent,acName,anRTPrice,anSalePrice FROM [Base].[dbo].[tHE_SetItem]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                Ident idn = new Ident();
                idn.AcIdent = sdr["acIdent"].ToString();
                idn.AcName = sdr["acName"].ToString();
                idn.AnRTPrice = Double.Parse(sdr["anRTPrice"].ToString());
                idn.AnSalePrice = Double.Parse(sdr["anSalePrice"].ToString());
                identiList.Add(idn);
            }
            return identiList.ToList();
        }

        public IEnumerable<NarudzbinaItem> GetNarudzbinaItems()
        {
            List<NarudzbinaItem> narudzbinaItemList = new List<NarudzbinaItem>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acIdent,acKey,anNo,anQty FROM [Base].[dbo].[tHE_OrderItem]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                NarudzbinaItem nar = new NarudzbinaItem();
                nar.AcIdent = sdr["acIdent"].ToString();
                nar.AcKey = sdr["acKey"].ToString();
                nar.AnNo = Convert.ToInt32(sdr["anNo"].ToString());
                nar.AnQty = Double.Parse(sdr["anQty"].ToString());
                narudzbinaItemList.Add(nar);
            }
            return narudzbinaItemList.ToList();
        }

        public IEnumerable<Narudzbina> GetNarudzbine()
        {
            List<Narudzbina> narudzbinaList = new List<Narudzbina>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acKey,acReceiver,adDate,adDateValid,anClerk,anValue,anForPay,acWarehouse,acStatus FROM [Base].[dbo].[tHE_Order]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                Narudzbina nar = new Narudzbina();
                nar.AcKey = sdr["acKey"].ToString();
                nar.AcReceiver = sdr["acReceiver"].ToString();
                nar.AdDate = DateTime.Parse(sdr["adDate"].ToString()).ToString("dd/MM/yyyy");
                //nar.AdDate = "Mar 11, 2021 17:28:03";
                //nar.AdDateValid = "Mar 11, 2021 17:28:03";
                nar.AdDateValid = DateTime.Parse(sdr["adDateValid"].ToString()).ToString("dd/MM/yyyy");
                nar.AnClerk = Convert.ToInt32(sdr["anClerk"].ToString());
                nar.AnValue = Double.Parse(sdr["anValue"].ToString());
                nar.AnForPay = Double.Parse(sdr["anForPay"].ToString());
                nar.AcWarehouse = sdr["acWarehouse"].ToString();
                nar.AcStatus = sdr["acStatus"].ToString();
                narudzbinaList.Add(nar);
            }
            return narudzbinaList.OrderBy(x => x.AdDate) as IEnumerable<Narudzbina>;
        }

        public PriceDTO GetPriceForIdent(string acIdent)
        {
            List<Ident> identi = GetIdenti() as List<Ident>;
            PriceDTO retDto = new PriceDTO() { anValue = 0, anForPay = 0 };

            foreach (Ident idn in identi)
            {
                if (idn.AcIdent == acIdent)
                {
                    retDto.anValue = idn.AnRTPrice;
                    retDto.anForPay = idn.AnSalePrice;
                    return retDto;
                }
            }

            return retDto;

            //SqlConnection conn = new SqlConnection(this.connString);
            //conn.Open();
            //SqlCommand cmd = new SqlCommand($"SELECT anRTPrice, anSalePrice FROM [dbo].[tHE_SetItem] WHERE acIdent = '{acIdent}'", conn);
            //cmd.CommandType = System.Data.CommandType.Text;
            //SqlDataReader sdr = cmd.ExecuteReader();

            //PriceDTO pDTO = new PriceDTO();

            //while (sdr.Read())
            //{
            //    pDTO.anValue = Double.Parse(sdr["anRTPrice"].ToString());
            //    pDTO.anForPay = Double.Parse(sdr["anSalePrice"].ToString());
            //}

            //return pDTO;
        }

        public IEnumerable<Referent> GetReferenti()
        {
            List<Referent> referents = new List<Referent>();

            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acName, acMiddle, acSurname, anUserId FROM [Base].[dbo].[tHE_SetSubjContact]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                string firstName = sdr["acName"].ToString();
                string middleName = sdr["acMiddle"].ToString();
                string lastName = sdr["acSurname"].ToString();


                string fullName;
                if (String.IsNullOrEmpty(middleName.Trim()))
                {
                    fullName = String.Format($"{firstName + " " + lastName}");
                }
                else
                {
                    fullName = String.Format($"{firstName + " " + middleName + " " + lastName}");
                }

                int userID = Convert.ToInt32(sdr["anUserId"].ToString());
                Referent referent = new Referent() { FullName = fullName, AnUserID = userID };
                referents.Add(referent);
            }

            return referents;
        }

        public IEnumerable<Status> GetStatuses()
        {
            List<Status> statusi = new List<Status>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acStatus,acName FROM [Base].[dbo].[tPA_SetDocTypeStat]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                string status = sdr["acStatus"].ToString();
                string name = sdr["acName"].ToString();
                Status oneStatus = new Status() { Name = name, StatusName = status };
                statusi.Add(oneStatus);
            }
            return statusi;
        }

        public IEnumerable<Subjekt> GetSubjekti()
        {
            List<Subjekt> subjektiList = new List<Subjekt>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acSubject,acName2,acPost,acAddress FROM [Base].[dbo].[tHE_SetSubj]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                Subjekt sub = new Subjekt();
                sub.AcSubject = sdr["acSubject"].ToString();
                sub.AcName2 = sdr["acName2"].ToString();
                sub.AcAddress = sdr["acAddress"].ToString();
                sub.AcPost = sdr["acPost"].ToString();
                subjektiList.Add(sub);
            }

            return subjektiList as IEnumerable<Subjekt>;
        }

        public IEnumerable<User> GetUsernames()
        {
            List<User> usernameList = new List<User>();
            SqlConnection conn = new SqlConnection(this.connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT acUserId,anUserChg FROM [Base].[dbo].[tHE_SetSubjContact]", conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader sdr = cmd.ExecuteReader();

            while (sdr.Read())
            {
                string usern = sdr["acUserId"].ToString();
                int id = Convert.ToInt32(sdr["anUserChg"]);
                User u = new User(usern, id);
                usernameList.Add(u);
            }
            return usernameList.ToList();
        }


        // Ovde proslediti jos i anValue i anForPay
        public string PostNarudzbina(string acReciever, string adDate, int UserID)
        {
            SqlConnection con = new SqlConnection(this.connString);
            SqlCommand cmd = new SqlCommand("[Base].[dbo].[pHE_OrderCreHead]", con);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.Add(new SqlParameter("@cNarocnik", acReciever));
            cmd.Parameters.Add(new SqlParameter("@cPrejemnik", acReciever));
            cmd.Parameters.Add(new SqlParameter("@cSkladisce", ""));
            cmd.Parameters.Add(new SqlParameter("@cPoslDog", "0100"));
            cmd.Parameters.Add(new SqlParameter("@dDatum", adDate));
            cmd.Parameters.Add(new SqlParameter("@nUserId", UserID));
            cmd.Parameters.Add(new SqlParameter("@cOddelek", ""));
            cmd.Parameters.Add(new SqlParameter("@cKljuc", SqlDbType.VarChar, 13)).Direction = ParameterDirection.Output;

            con.Open();
            cmd.ExecuteNonQuery();

            string key = cmd.Parameters["@cKljuc"].Value.ToString();

            con.Close();
            return key;
        }

        public string PostNarudzbinaItem(string AcIdent, string AcKey, long acKeyLocal, int AnNo, double AnQty)
        {
            string query = "INSERT INTO [Base].[dbo].[tHE_OrderItem] (anNo, acKey, acIdent, anQty) VALUES(@anNo, @acKey, @acIdent, @anQty)";
            SqlConnection con = new SqlConnection(this.connString);
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.Add(new SqlParameter("@anNo", AnNo));
            cmd.Parameters.Add(new SqlParameter("@acKey", AcKey));
            cmd.Parameters.Add(new SqlParameter("@acIdent", AcIdent));
            cmd.Parameters.Add(new SqlParameter("@anQty", AnQty));
            con.Open();
            cmd.ExecuteReader();
            con.Close();
            return "OK";
        }

        public AllDataDTO PostNarudzbineIStavke(AllDataPostDTO content)
        {
            List<NarudzbinaItem> realList = new List<NarudzbinaItem>();
            foreach(NarudzbinaItem narItm in content.stavkeNarudzbine)
            {
                if (narItm.AcKey != null)
                {
                    PostNarudzbinaItem(narItm.AcIdent,narItm.AcKey,narItm.AcKeyLocal,narItm.AnNo,narItm.AnQty);
                    PriceDTO pDTO = GetCurrentPriceForNarudzbina(narItm.AcKey);
                    PriceDTO identPrice = GetPriceForIdent(narItm.AcIdent);
                    pDTO.anValue += (narItm.AnQty * identPrice.anValue);
                    pDTO.anForPay += (narItm.AnQty * identPrice.anForPay);
                    UpdateNarudzbinaPriceFULL(pDTO,narItm.AcKey);
                }
                else
                {
                    realList.Add(narItm);
                }
            }

            content.stavkeNarudzbine = realList;

            foreach (NarudzbinaPostModel narudzbina in content.narudzbine)
            {
                PriceDTO totalPrice = new PriceDTO();
                string acKey = PostNarudzbina(narudzbina.AcReciever, narudzbina.AdDate.ToString(), narudzbina.UserID);

                foreach (NarudzbinaItem narItm in content.stavkeNarudzbine)
                {
                    if (narItm.AcKeyLocal == narudzbina.AcKeyLocal)
                    {
                        narItm.AcKey = acKey;
                        PriceDTO pDTO = GetPriceForIdent(narItm.AcIdent);
                        totalPrice.anForPay += (narItm.AnQty * pDTO.anForPay);
                        totalPrice.anValue += (narItm.AnQty * pDTO.anValue);
                        PostNarudzbinaItem(narItm.AcIdent, narItm.AcKey, narItm.AcKeyLocal, narItm.AnNo, narItm.AnQty);
                    }
                }

                UpdateNarudzbinaPriceFULL(totalPrice,acKey);
            }

            return GetEntireCollection();
        }

        public string UpdateNarudzbina(double anValue, string acKey)
        {
            double anForPay = anValue * 1.1525;
            anForPay = Math.Round(anForPay, 2);
            string query = "UPDATE [Base].[dbo].[tHE_Order] SET anValue ='" + anValue + "', anForPay = '" + anForPay + "' WHERE acKey = '" + acKey + "'";

            SqlConnection con = new SqlConnection(this.connString);
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.CommandType = CommandType.Text;
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
            return "OK";
        }

        public void UpdateNarudzbinaPriceFULL(PriceDTO dto, string acKey)
        {
            string query = $"UPDATE [Base].[dbo].[tHE_Order] SET anValue = {dto.anValue}, anForPay = {dto.anForPay} WHERE acKey = '{acKey}'";

            SqlConnection con = new SqlConnection(this.connString);
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.CommandType = CommandType.Text;
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }

    }
}