/**
  * @desc Function for calculating the elapsed time between now and a given time in the past
  * @param number $unixTime - time in Unix format (seconds elapsed since 1 January 1970)
  * @return string - a string containing the elapsed time in minutes/hours, or "unknown"
  */
const timeAgo = (unixTime: number): string => {
  if (unixTime) {
    // Time elapsed in hours with fractions
    const hours: number = (Math.floor(new Date().getTime() / 1000) - unixTime) / 60 / 60;
    const rtf = new Intl.RelativeTimeFormat('en');

    if (hours >= 1) { // Elapsed time is longer than or equal to 1 hour
      const wholeHours: number = Math.floor(hours);

      if (wholeHours >= 24) {
        return rtf.format(-Math.floor(wholeHours / 24), 'days'); // In days
      } else {
        return rtf.format(-wholeHours, 'hours'); // In hours
      }
    } else { // Elapsed time is less than 1 hour
      const minutes: number = Math.floor(60 * hours);

      return rtf.format(-minutes, 'minutes'); // In minutes
    }
  } else {
    return 'unknown';
  }
};

export default timeAgo;
