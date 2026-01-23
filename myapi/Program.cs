using Microsoft.Extensions.Options;
using Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<RockPaperScissorLizardSpockServices>();
// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(Options =>
{
   Options.AddPolicy("DemoDevClient", policy =>
   {
      policy.WithOrigins("http://127.0.0.1:5502").AllowAnyHeader().AllowAnyMethod();
   });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
   app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("DemoDevClient");
app.MapControllers();


app.Run();

