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
    public class OtherController : ApiController
    {
        IRepository _repository { get; set; }

        public OtherController(IRepository repository)
        {
            _repository = repository;
        }

        [Route("api/Cities")]
        public IEnumerable<City> GetCities()
        {
            return _repository.GetCities();
        }

        [Route("api/Clerks")]
        public IEnumerable<Clerk> GetClerks()
        {
            return _repository.GetClerks();
        }

        [Route("api/Referents")]
        public IEnumerable<Referent> GetReferents()
        {
            return _repository.GetReferenti();
        }

        [Route("api/Statuses")]
        public IEnumerable<Status> GetStatuses()
        {
            return _repository.GetStatuses();
        }

        [Route("api/Users")]
        public IEnumerable<User> GetUsers()
        {
            return _repository.GetUsernames();
        }

    }
}
