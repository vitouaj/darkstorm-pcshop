using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace darkstorm_api.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ProductId { get; set; }
        public string? Model { get; set; }
        public double? Price { get; set; }
        public string? Manufacturer { get;set; }
        public string? CPU { get; set; }
        public string? GPU { get; set; }
        public string? RamName { get; set; }
        public int? RAM { get; set; }
        public int? HardDisk { get; set; }
        public string? HardDiskName { get; set; }
        public int? Year { get; set; }
        public int? NumberOfPorts { get; set; }
        public string? Resolution { get; set; }
        public int? RefreshRate { get; set; }
        public int? Quality { get; set;}
        public float? Display { get; set; }
        public bool? TrueTone { get; set; }
        public bool? FalseTone { get; set;}
    }
}
