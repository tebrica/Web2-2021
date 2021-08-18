﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models
{
    public class Narudzbina
    {
        public string AcKey { get; set; }
        public string AcReceiver { get; set; }
        public string AdDate { get; set; }
        public string AdDateValid { get; set; }
        public int AnClerk { get; set; }
        public double AnValue { get; set; }
        public double AnForPay { get; set; }
        public string AcWarehouse { get; set; }
        public string AcStatus { get; set; }
        public long AcKeyLocal { get; set; }

        public Narudzbina()
        {

        }

    }
}