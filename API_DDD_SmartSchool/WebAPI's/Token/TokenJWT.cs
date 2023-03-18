﻿using System.IdentityModel.Tokens.Jwt;

namespace WebAPI_s.Token
{
    public class TokenJWT
    {
        private JwtSecurityToken token;
        public TokenJWT(JwtSecurityToken token)
        {
            this.token = token;
        }
        public DateTime ValidTo => token.ValidTo;
        public string value => new JwtSecurityTokenHandler().WriteToken(this.token);
    }
}
