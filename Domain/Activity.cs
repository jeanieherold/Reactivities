namespace Domain
{
    public class Activity // Entity or Model - table
    {
        public Guid Id { get; set; } // cols inside the table
        public string Title { get; set; }   
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
    }
}