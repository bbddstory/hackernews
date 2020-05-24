/**
  * @desc Function for calculating the elapsed time between now and a given time in the past
  * @param number $unixTime - time in Unix format (seconds elapsed since 1 January 1970)
  * @return string - a string containing the elapsed time in minutes/hours, or "unknown"
  */
const timeAgo = (unixTime: number): string => {
  if (unixTime) {
    // Time elapsed in hours with fractions
    const hours: number = (Math.floor(new Date().getTime() / 1000) - unixTime) / 60 / 60;

    if (hours > 1) { // Elapsed time is longer than one hour
      return `${Math.floor(hours)} hours ago`; // In whole hours
    } else {
      const minutes: number = Math.floor(60 * hours);

      return `${minutes > 1 ? `${minutes} minutes` : '1 minute'} ago`; // In minutes
    }
  } else {
    return 'unknown';
  }
};

export default timeAgo;
