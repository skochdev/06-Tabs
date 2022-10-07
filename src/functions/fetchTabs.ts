export interface ITab {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

export const fetchTabs = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return (await response.json()) as ITab[];
    }
  } catch (error) {
    console.log(error);
  }
};
