
export const fetchAllCampaigners = async () => {
    try {
      const response = await fetch(`https://razor.ygntechstartup.workers.dev/showcampaigns`);
      const data = await response.json();
      return data?.campaignDetails || []; ;
    } catch (error) {
      return []
    }
  };

export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};
