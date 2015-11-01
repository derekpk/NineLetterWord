using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

//using System.Xml;
namespace NLW
{
    public partial class NineLetterWord : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Response.Write("Hello World");
            if (!IsPostBack)
            {
            }
            else
            {
            }
        }
        override protected void OnInit(EventArgs e)
        {
            this.Load += new System.EventHandler(this.Page_Load);
        }	
    }
}