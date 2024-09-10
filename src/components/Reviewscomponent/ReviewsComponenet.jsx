import React from 'react';
import { Rating, Box, Typography, Avatar } from '@mui/material';

const reviews = [
  // ... same review data as before
];

// Review Card Component with hover effect
const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <div className="flex items-center mb-4">
      <Avatar className="bg-gray-500 text-white" sx={{ width: 56, height: 56 }}>
        {review.avatar}
      </Avatar>
      <div className="ml-3">
        <Typography variant="body1" className="font-bold">
          {review.name}
        </Typography>
        <Typography variant="caption" className="text-green-600">
          {review.verified && 'Verified owner'}
        </Typography>
      </div>
    </div>
    <div className="flex items-center mb-2">
      <Rating value={review.rating} readOnly size="small" />
      <Typography className="ml-2">{review.rating}/5</Typography>
    </div>
    <Typography variant="caption" className="text-gray-500 mb-4">
      {review.date}
    </Typography>
    {review.review && (
      <Typography className="mb-4 text-gray-700">
        {review.review}
      </Typography>
    )}
    <div className="flex items-center mt-4">
      {review.productLogo && (
        <img src={review.productLogo} alt={review.product} className="h-8 w-8 object-contain mr-2" />
      )}
      <Typography variant="body2" className="text-blue-600">
        {review.product}
      </Typography>
    </div>
  </div>
);

const ReviewsComponent = () => {
  return (
    <div className="bg-gradient-to-b from-orange-400 to-pink-300 py-10 px-5">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Reviews</h1>
        <p className="text-lg text-white mt-2">Testimonials, what our clients say about us.</p>
      </div>

      <div className="bg-orange-100 p-4 rounded-lg text-center shadow-lg">
        <p className="text-orange-900 font-medium">
          Nepal’s #1 Subscription Marketplace. Our company has proudly served over
          <span className="font-bold"> 10500+ satisfied users</span> since 2019, with an impressive average
          customer satisfaction rating of
          <span className="font-bold"> 4.8/5</span>. Customers vouch for us as legit, safe, and affordable for
          discounted OTT accounts and memberships.
        </p>
      </div>

      <div className="mt-10 bg-white p-8 rounded-lg shadow-md">
        <Box textAlign="center" className="mb-6">
          <Typography variant="h3" className="font-bold">
            4.8
          </Typography>
          <Rating name="read-only" value={4.8} readOnly precision={0.1} size="large" />
          <Typography variant="subtitle1" className="text-gray-600">
            Based on 1,168 reviews
          </Typography>
        </Box>

        {/* Rating Breakdown */}
        <div className="space-y-4">
          {[
            { star: '5 star', percentage: 86 },
            { star: '4 star', percentage: 14 },
            { star: '3 star', percentage: 7 },
            { star: '2 star', percentage: 2},
            { star: '1 star', percentage: 0 },
          ].map((item, idx) => (
            <div className="flex items-center justify-between space-x-4" key={idx}>
              <span className="w-16 text-sm font-semibold">{item.star}</span>

              <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden relative">
                <div
                  className="bg-yellow-500 h-full rounded-full transition-all duration-300 hover:bg-yellow-600"
                  style={{ width: `${item.percentage}%` }}
                ></div>
                <span className="absolute right-0 -top-6 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  {item.percentage}%
                </span>
              </div>

              <span className="w-10 text-sm font-semibold">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponent;
