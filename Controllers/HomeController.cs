using Microsoft.AspNetCore.Mvc;

namespace blahsec2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("Index");
        }

        public IActionResult calc()
        {
            return View();
        }
    }
}
