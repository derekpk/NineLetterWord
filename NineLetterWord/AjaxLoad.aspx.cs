using System;
using System.Collections.Generic;

using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace NLW
{
    public partial class AjaxLoad : System.Web.UI.Page
    {
        String param;

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString.Count > 0)
            {
                ScoreCalulator score = new ScoreCalulator();

                if (!string.IsNullOrEmpty(Request.QueryString["param"]))
                {
                    this.param = Request.QueryString["param"]; //get query string into string variable
                    if (this.param.Length > 0)
                        Response.Write(score.FindWord(this.param, Request.QueryString["gameTimeLeft"]));
                    else
                        Response.Write("NUTS!");
                }else
                    Response.Write("NUTS!");
            }
        }
    }
}