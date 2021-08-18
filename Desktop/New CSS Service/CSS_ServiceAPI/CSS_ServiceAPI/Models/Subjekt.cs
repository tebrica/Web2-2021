using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models
{
    public class Subjekt
    {
        public string AcSubject { get; set; }
        public string AcName2 { get; set; }
        public string AcAddress { get; set; }
        public string AcPost { get; set; }

        public Subjekt()
        {

        }

        public Subjekt(string acSubject, string acName2, string acAddress, string acPost)
        {
            AcSubject = acSubject;
            AcName2 = acName2;
            AcAddress = acAddress;
            AcPost = acPost;
        }
    }
}