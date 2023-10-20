using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace darkstorm_api.Migrations
{
    /// <inheritdoc />
    public partial class AddGuidToProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "CPU", "Display", "FalseTone", "GPU", "HardDisk", "HardDiskName", "Manufacturer", "Model", "NumberOfPorts", "Price", "Quality", "RAM", "RamName", "RefreshRate", "Resolution", "TrueTone", "Year" },
                values: new object[,]
                {
                    { new Guid("46e0f1cd-a0a4-40ed-8f29-10d32de6ebd8"), "Intel Core i7 gen8", 15f, false, "GTX GEFORCE", 512, "SSD512", "Asus", "Rog Strix G15", 5, 750.89999999999998, 1080, 8, null, 144, null, true, 2021 },
                    { new Guid("a2edf0ac-d770-4510-8dfc-3168952edb3f"), "Apple M2", 16f, false, "M2", 512, "SSD512", "Apple", "Mac Book Pro 16", 5, 2789.9899999999998, 2098, 16, null, 144, null, true, 2022 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: new Guid("46e0f1cd-a0a4-40ed-8f29-10d32de6ebd8"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: new Guid("a2edf0ac-d770-4510-8dfc-3168952edb3f"));
        }
    }
}
