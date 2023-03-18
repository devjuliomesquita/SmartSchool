using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace WebAPI_s.Token
{
    public class JwtSegurityKey
    {
        public static SymmetricSecurityKey Create(string secret)
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret));
        }
    }
}
