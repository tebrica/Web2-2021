using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSS_ServiceAPI.Models
{
    public class User
    {
        public string Username { get; set; }
        public int Id { get; set; }

        public User()
        {

        }

        public User(string username, int id)
        {
            Username = username;
            Id = id;
        }
    }
}