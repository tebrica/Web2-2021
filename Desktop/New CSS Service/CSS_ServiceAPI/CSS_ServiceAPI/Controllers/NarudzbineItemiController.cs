using CSS_ServiceAPI.Models;
using CSS_ServiceAPI.Models.RequestModels;
using CSS_ServiceAPI.Repository;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CSS_ServiceAPI.Controllers
{
    public class NarudzbineItemiController : ApiController
    {
        IRepository _repository;

        public NarudzbineItemiController(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<NarudzbinaItem> Get()
        {
            return _repository.GetNarudzbinaItems();
        }

        public IHttpActionResult Post([FromBody]NarudzbinaItemPostRecieveDTO content)
        {
            Debugger.Launch();
            if (String.IsNullOrEmpty(content.AcIdent) || String.IsNullOrEmpty(content.AcKey))
            {
                return BadRequest();
            }

            try
            {
                _repository.PostNarudzbinaItem(content.AcIdent, content.AcKey, content.acKeyLocal, content.AnNo, content.AnQty);
            }
            catch(Exception e)
            {
                string exString = $"Error Narudzbine item POST --- AcIdent: {content.AcIdent}  AcKey: {content.AcKey}  AcKeyLocal: {content.acKeyLocal}  AnNo: {content.AnNo}  AnQty: {content.AnQty}";
                File.AppendAllText("ErrorLogFile.txt", exString + $"\t  {e.Message}");
                return BadRequest();
            }
            return Ok("OK");
        }

    }
}
