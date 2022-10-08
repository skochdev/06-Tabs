import { Tab } from '../../functions/fetchTabs';
import * as S from './Tabs.styled';

interface Props {
  tabs: Tab[];
  currentTabIndex: number;
  handleTabClick: (id: string) => void;
}

const Tabs = ({ tabs, currentTabIndex, handleTabClick }: Props) => {
  const { company, title, dates, duties } = tabs[currentTabIndex];

  return (
    <S.Tabs>
      <S.ButtonList>
        {tabs.map(({ id, company }) => (
          <li key={id}>
            <S.Button
              className={tabs[currentTabIndex].id === id ? 'active' : ''}
              onClick={() => handleTabClick(id)}>
              {company}
            </S.Button>
          </li>
        ))}
      </S.ButtonList>
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Company>
          {company}
          <S.Dates>{dates}</S.Dates>
        </S.Company>
        <ul>
          {duties.map((duty, index) => (
            <S.Duty key={index}>
              <p>{duty}</p>
            </S.Duty>
          ))}
        </ul>
      </S.Details>
    </S.Tabs>
  );
};

export default Tabs;
