using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebAPI_s.Models
{
    public class MessageViewModel
    {
        public int Id { get; set; }

        public string Titulo { get; set; }

        public bool Ativo { get; set; }

        public DateTime DataDeCadastro { get; set; }

        public DateTime DataDaAlteracao { get; set; }

        public string UserId { get; set; }
    }
}
