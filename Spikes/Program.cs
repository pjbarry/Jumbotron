using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Spikes
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> locations = new List<String>();
            locations.Add("http://bbc.co.uk");
            locations.Add("http://apple.com");

            Rotator rotator = new Rotator(locations);
            Console.WriteLine(rotator.GetCurrentLocation());
            Console.WriteLine(rotator.GetNextLocation());
            Console.WriteLine(rotator.GetNextLocation());
            Console.WriteLine(rotator.GetNextLocation());
            Console.WriteLine(rotator.GetNextLocation());
            rotator.AddLocation("http://medium.com");
            Console.WriteLine("removing - " +rotator.RemoveCurrentLocation());
            Console.WriteLine(rotator.GetNextLocation());
            Console.WriteLine(rotator.GetNextLocation());
            Console.WriteLine(rotator.GetNextLocation());

            Console.ReadLine();
        }
    }
}
