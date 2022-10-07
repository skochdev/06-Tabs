import { ITab } from '../functions/fetchTabs';
import * as S from './Tabs.styled';

interface Props {
  tabsData: ITab[];
}

const Tabs = ({ tabsData }: Props) => {
  return (
    <div>
      <S.TabsList>
        {tabsData.map(({ title, id, dates, duties, order, company }) => (
          <li key={id}>
            <h2>{company}</h2>
            <p>{title}</p>
          </li>
        ))}
      </S.TabsList>
    </div>
  );
};

export default Tabs;
