'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, ExternalLink, Navigation, Star, Building } from 'lucide-react';

interface CompanyMapProps {
  location: string;
  className?: string;
  variant?: 'default' | 'compact' | 'expanded';
}

const CompanyMap: React.FC<CompanyMapProps> = ({ location, className = '', variant = 'default' }) => {
  const [mapData, setMapData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Kota Depok coordinates
  const depokCoordinates = {
    lat: -6.4025,
    lng: 106.7942
  };

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        setLoading(true);
        
        // Simulate API response with realistic data structure
        setTimeout(() => {
          setMapData({
            local_results: [
              {
                title: "Nextzenith Ventures Mi Room",
                gps_coordinates: {
                  latitude: -6.4025,
                  longitude: 106.7942
                },
                rating: 4.7,
                reviews: 125,
                type: "Technology company",
                address: "Jl. Margonda Raya No.358, Kemiri Muka, Beji, Depok City, West Java 16424",
                open_state: "Open",
                hours: "Open 24 hours",
                phone: "+62 21 7720 1234",
                website: "https://nextzenith.com"
              }
            ]
          });
          setLoading(false);
        }, 800);
        
      } catch (err) {
        console.error('Map API Error:', err);
        setError('Failed to load map data');
        setLoading(false);
      }
    };

    fetchMapData();
  }, [location]);

  const handleOpenInMaps = () => {
    if (mapData && mapData.local_results && mapData.local_results[0]) {
      const place = mapData.local_results[0];
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.gps_coordinates.latitude},${place.gps_coordinates.longitude}`;
      window.open(mapsUrl, '_blank');
    } else {
      // Fallback to coordinates
      window.open(`https://www.google.com/maps/search/?api=1&query=${depokCoordinates.lat},${depokCoordinates.lng}`, '_blank');
    }
  };

  const handleGetDirections = () => {
    if (mapData && mapData.local_results && mapData.local_results[0]) {
      const place = mapData.local_results[0];
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.gps_coordinates.latitude},${place.gps_coordinates.longitude}`;
      window.open(directionsUrl, '_blank');
    } else {
      // Fallback to coordinates
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${depokCoordinates.lat},${depokCoordinates.lng}`, '_blank');
    }
  };

  const getMapHeight = () => {
    switch (variant) {
      case 'compact': return 'h-24';
      case 'expanded': return 'h-48';
      default: return 'h-32';
    }
  };

  const getPadding = () => {
    switch (variant) {
      case 'compact': return 'p-2';
      case 'expanded': return 'p-4';
      default: return 'p-3';
    }
  };

  if (loading) {
    return (
      <div className={`bg-gray-800/30 rounded-lg border border-gray-700/30 p-4 ${className}`}>
        <div className="animate-pulse">
          <div className="h-32 bg-gray-700/50 rounded-lg mb-3"></div>
          <div className="h-4 bg-gray-700/50 rounded mb-2"></div>
          <div className="h-3 bg-gray-700/50 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-gray-800/30 rounded-lg border border-gray-700/30 p-4 ${className}`}>
        <div className="text-center">
          <MapPin className="w-8 h-8 text-gray-500 mx-auto mb-2" />
          <p className="text-gray-400 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-800/30 rounded-lg border border-gray-700/30 overflow-hidden ${className}`}>
      {/* Map Preview */}
      <div className={`relative ${getMapHeight()} bg-gradient-to-br from-blue-900/30 to-purple-900/30`}>
        {/* Static map representation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-1" />
            <div className="text-xs text-gray-300">Kota Depok</div>
            <div className="text-xs text-gray-500">West Java, Indonesia</div>
          </div>
        </div>
        
        {/* Interactive overlay */}
        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300 cursor-pointer"
             onClick={handleOpenInMaps}>
          <div className="absolute top-2 right-2">
            <ExternalLink className="w-4 h-4 text-white/70" />
          </div>
        </div>
      </div>

      {/* Map Info */}
      <div className={getPadding()}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-white">
            {mapData?.local_results?.[0]?.title || "Company Location"}
          </h4>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-400">
              {mapData?.local_results?.[0]?.open_state || "Active"}
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
            <span className="text-xs text-gray-300 leading-relaxed">
              {mapData?.local_results?.[0]?.address || "Depok, West Java, Indonesia"}
            </span>
          </div>
          
          {mapData?.local_results?.[0]?.rating && (
            <div className="flex items-center gap-2">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-gray-300">
                {mapData.local_results[0].rating} 
                {mapData.local_results[0].reviews && (
                  <span className="text-gray-500 ml-1">
                    ({mapData.local_results[0].reviews} reviews)
                  </span>
                )}
              </span>
            </div>
          )}
          
          {mapData?.local_results?.[0]?.type && (
            <div className="flex items-center gap-2">
              <Building className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-gray-300">
                {mapData.local_results[0].type}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
            <span className="text-xs text-gray-400">Get Directions</span>
            <div className="flex gap-1">
              <button
                onClick={handleGetDirections}
                className="flex items-center gap-1 px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs hover:bg-blue-600/30 transition-colors duration-300"
              >
                <Navigation className="w-3 h-3" />
                Navigate
              </button>
              <button
                onClick={handleOpenInMaps}
                className="flex items-center gap-1 px-2 py-1 bg-gray-600/20 text-gray-400 rounded text-xs hover:bg-gray-600/30 transition-colors duration-300"
              >
                <ExternalLink className="w-3 h-3" />
                View Maps
              </button>
            </div>
          </div>
        </div>
        
        {/* Operating Hours */}
        {mapData?.local_results?.[0]?.hours && (
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs font-medium text-white">
                {mapData.local_results[0].hours}
              </span>
            </div>
            {mapData.local_results[0].operating_hours && (
              <div className="text-xs text-gray-400">
                Business Hours Available
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyMap;
