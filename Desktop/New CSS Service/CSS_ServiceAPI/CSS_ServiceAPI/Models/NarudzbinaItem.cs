using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models
{
    public class NarudzbinaItem
    {
        public int AnNo { get; set; }
        public string AcKey { get; set; } = null;
        public string AcIdent { get; set; }
        public double AnQty { get; set; }
        public long AcKeyLocal { get; set; }

        public NarudzbinaItem()
        {

        }
    }
}