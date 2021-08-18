using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models.RequestModels
{
    public class AllDataPostDTO
    {
        public IEnumerable<NarudzbinaPostModel> narudzbine;
        public IEnumerable<NarudzbinaItem> stavkeNarudzbine;

        public AllDataPostDTO()
        {
            narudzbine = new List<NarudzbinaPostModel>();
            stavkeNarudzbine = new List<NarudzbinaItem>();
        }

    }
}