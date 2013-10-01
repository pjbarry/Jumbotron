using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Spikes
{
    public class Rotator
    {
        private readonly List<string> _locations;
        private int index;


        public Rotator(List<string> Locations )
        {
            if (Locations == null)
                throw (new Exception("List is Null"));
            _locations = Locations;
        }


        public string GetNextLocation()
        {
            var location = "";
            if (_locations.Count > 0)
            {
                IncrementIndex();
                location = _locations[index];
            }
            return location;
        }

        public string GetCurrentLocation()
        {
            var location = "";
            if (_locations.Count > 0)
            {
                location = _locations[index];
            }
            return location;

        }

        public string RemoveCurrentLocation()
        {
            var location = "";
            if (_locations.Count > 0)
            {
                location = _locations[index];
                _locations.RemoveAt(index);
                index--;
            }
            return location;
        }

        public void AddLocation(string location)
        {
            _locations.Add(location);
        }

        private void IncrementIndex()
        {
            if (_locations.Count > 0)
            {
                index++;
                index = index%_locations.Count;
            }
        }
    }
}
