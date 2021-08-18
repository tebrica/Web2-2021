using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models.RequestModels
{
    public class AllDataDTO
    {
        public IEnumerable<Subjekt> subjekti;
        public IEnumerable<Ident> identi;
        public IEnumerable<City> gradovi;
        public IEnumerable<Status> statusi;
        public IEnumerable<Referent> referenti;
        public IEnumerable<Narudzbina> narudzbine;
        public IEnumerable<NarudzbinaItem> narudzbinaItemi;

        public AllDataDTO()
        {
            subjekti = new List<Subjekt>();
            identi = new List<Ident>();
            gradovi = new List<City>();
            statusi = new List<Status>();
            referenti = new List<Referent>();
            narudzbine = new List<Narudzbina>();
            narudzbinaItemi = new List<NarudzbinaItem>();
        }

    }
}