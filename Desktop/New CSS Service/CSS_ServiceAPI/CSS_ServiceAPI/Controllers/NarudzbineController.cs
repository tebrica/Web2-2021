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
    public class NarudzbineController : ApiController
    {
        IRepository _repository;

        public NarudzbineController(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Narudzbina> Get()
        {
            return _repository.GetNarudzbine();
        }

        // POST  api/Narudzbine
        public IHttpActionResult Post([FromBody]NarudzbinaPostRecieveDTO content)
        {
            Debugger.Launch();
            if (String.IsNullOrEmpty(content.acReciever) || String.IsNullOrEmpty(content.adDate))
            {
                return BadRequest();
            }

            string key = String.Empty;
            try
            {
                 key =  _repository.PostNarudzbina(content.acReciever, content.adDate, content.UserID);
            }
            catch(Exception e)
            {
                string exLog = $"Errror Post: AcReciever: {content.acReciever}  AdDate: {content.adDate}  User ID: {content.UserID}";
                File.AppendAllText("ErrorLogFile.txt",exLog + $"\t Message: {e.Message}");
                return BadRequest();
            }
            return Ok(key);
        }

        // PUT  api/Narudzbine
        public IHttpActionResult Put([FromBody]NarudzbinaPutRecieveDTO putData)
        {
            Debugger.Launch();
            if (String.IsNullOrEmpty(putData.acKey))
            {
                return BadRequest();
            }

            _repository.UpdateNarudzbina(putData.anValue,putData.acKey);
            return Ok("OK");
        }

    }
}
