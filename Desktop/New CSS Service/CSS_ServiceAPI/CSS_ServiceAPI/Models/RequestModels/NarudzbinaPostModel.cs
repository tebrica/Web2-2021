using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models.RequestModels
{
    public class NarudzbinaPostModel
    {
        public string AcReciever { get; set; }
        public DateTime AdDate { get; set; }
        public int UserID { get; set; }
        public string DocType { get; set; }
        public long AcKeyLocal { get; set; }
    }
}