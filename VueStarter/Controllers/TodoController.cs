using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VueStarter.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VueStarter.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        [HttpGet, Route("")]
        public IActionResult GetTodoList()
        {
            List<TodoItem> todos = new List<TodoItem>();
            todos.Add(new TodoItem()
                {
                    Text = "Say hello",
                    IsDone = false
                });

            return Ok(todos);
        }
    }
}
