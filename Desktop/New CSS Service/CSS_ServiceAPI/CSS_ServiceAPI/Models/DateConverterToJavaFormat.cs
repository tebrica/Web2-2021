using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models
{
    public class DateConverterToJavaFormat
    {
        private static DateConverterToJavaFormat _instance = new DateConverterToJavaFormat();
        private DateConverterToJavaFormat()
        {

        }

        public static DateConverterToJavaFormat GetInstance()
        {
            return _instance;
        }

        public string ConvertToJavaDate(DateTime dateTime)
        {
            //if (dateTime.Month)

            return "";
        }

    }
}