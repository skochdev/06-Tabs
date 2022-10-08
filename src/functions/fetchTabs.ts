export interface Tab {
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
      return (await response.json()) as Tab[];
    }
  } catch (error) {
    console.log(error);
  }
};
