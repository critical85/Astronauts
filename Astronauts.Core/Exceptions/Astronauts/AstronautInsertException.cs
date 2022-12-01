namespace Astronauts.Core.Exceptions.Astronauts
{
    [Serializable]
    public class AstronautInsertException : Exception
    {
        public AstronautInsertException(string message) : base(message)
        { 
        }
    }
}
