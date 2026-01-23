using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RockPaperScissorLizardSpockController : ControllerBase
    {
       
        private readonly RockPaperScissorLizardSpockServices _rockPaperScissorLizardSpokeServices;
        
        public RockPaperScissorLizardSpockController(RockPaperScissorLizardSpockServices rockPaperScissorLizardSpockServices)
        {
            _rockPaperScissorLizardSpokeServices = rockPaperScissorLizardSpockServices;
        }

        [HttpGet]
        [Route("Fetch/{UserResponse}")]
    public string response(string UserResponse)
        {
            return _rockPaperScissorLizardSpokeServices.GetResponse(UserResponse);
        }
        
    }
}