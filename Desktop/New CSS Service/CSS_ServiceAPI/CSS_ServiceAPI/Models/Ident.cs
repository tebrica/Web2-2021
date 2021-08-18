using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models
{
    public class Ident
    {
        public string AcIdent { get; set; }
        public string AcName { get; set; }
        public double AnRTPrice { get; set; }
        public double AnSalePrice { get; set; }

        public Ident()
        {

        }

        public Ident(string acIdent, string acName, double anRTPrice, double anSalePrice)
        {
            AcIdent = acIdent;
            AcName = acName;
            AnRTPrice = anRTPrice;
            AnSalePrice = anSalePrice;
        }
    }
}