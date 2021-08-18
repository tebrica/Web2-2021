using CSS_ServiceAPI.Models;
using CSS_ServiceAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CSS_ServiceAPI.Controllers
{
    public class IdentController : ApiController
    {
        IRepository _repository;

        public IdentController(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Ident> Get()
        {
            return _repository.GetIdenti();
        }
    }
}
