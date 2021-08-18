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
    public class AllDataController : ApiController
    {
        IRepository _repository;

        public AllDataController(IRepository repository)
        {
            this._repository = repository;
        }
    
        public IHttpActionResult Get()
        {
            Debugger.Launch();
            try
            {
                return Ok(_repository.GetEntireCollection());
            }
            catch(Exception e)
            {
                File.WriteAllText(@"C:\Users\korisnik\OneDrive\Radna površina\Service LOG\log.txt",e.Message);
                return BadRequest();
            }
        }

        public IHttpActionResult Post([FromBody]AllDataPostDTO content)
        {
            // Ako su prazne obe liste samo vratimo sav sarzaj..
            if (content.narudzbine.ToList().Count == 0 && content.stavkeNarudzbine.ToList().Count == 0)
            {
                return Ok(_repository.GetEntireCollection());
            }

            return Ok(_repository.PostNarudzbineIStavke(content));
        }

    }
}
