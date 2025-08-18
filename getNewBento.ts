const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=KUNAL%20BHALERAO&g=iamKunalBhalerao&x=KUNAL_BHALERAO_&l=kunalbhalerao&i=https%3A%2F%2Fres.cloudinary.com%2Fkunalsenvironment%2Fimage%2Fupload%2Fv1755501348%2Fmy_image_ntaxgt.png&p=kunalbhalerao.me&z=28934";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
