using CSS_ServiceAPI.Models;
using CSS_ServiceAPI.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSS_ServiceAPI.Repository
{
    public interface IRepository
    {
        // GET..
        IEnumerable<Subjekt> GetSubjekti();
        IEnumerable<User> GetUsernames();
        IEnumerable<Ident> GetIdenti();
        IEnumerable<Narudzbina> GetNarudzbine();
        IEnumerable<NarudzbinaItem> GetNarudzbinaItems();
        IEnumerable<Referent> GetReferenti();
        IEnumerable<City> GetCities();
        IEnumerable<Clerk> GetClerks();
        IEnumerable<Status> GetStatuses();
        AllDataDTO GetEntireCollection();

        AllDataDTO PostNarudzbineIStavke(AllDataPostDTO content);

        // POST
        string PostNarudzbina(string acReciever, string adDate, int UserID);
        string PostNarudzbinaItem(string AcIdent, string AcKey, long acKeyLocal, int AnNo, double AnQty);

        // PUT
        string UpdateNarudzbina(double anValue, string acKey);

        PriceDTO GetPriceForIdent(string acKey);

        PriceDTO GetCurrentPriceForNarudzbina(string acKey);
    }
}
