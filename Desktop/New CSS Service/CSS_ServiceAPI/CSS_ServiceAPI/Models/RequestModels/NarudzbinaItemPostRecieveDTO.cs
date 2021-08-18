using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models.RequestModels
{
    public class NarudzbinaItemPostRecieveDTO
    {
        public string AcIdent { get; set; }
        public string AcKey { get; set; }
        public long acKeyLocal { get; set; }
        public int AnNo { get; set; }
        public double AnQty { get; set; }
    }
}