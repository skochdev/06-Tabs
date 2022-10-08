import styled from 'styled-components/macro';

export const Tabs = styled.div`
  display: flex;
  max-width: 900px;
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights[1]};
  margin-bottom: ${(p) => p.theme.space[1]}rem;
`;

export const Company = styled.p`
  display: inline-block;
  padding: 1rem 2rem;
  color: ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radii.normal};
  margin-bottom: ${(p) => p.theme.space[2]}rem;
  font-weight: ${(p) => p.theme.fontWeights[3]};
  background-color: ${(p) => p.theme.colors.background};
`;

export const Dates = styled.span`
  display: inline-block;
  color: ${(p) => p.theme.colors.muted};
  background-color: transparent;
  margin-left: ${(p) => p.theme.space[2]}rem;
  font-weight: ${(p) => p.theme.fontWeights[0]};
`;

export const Button = styled.button`
  background-color: transparent;
  font-weight: ${(p) => p.theme.fontWeights[3]};
  border: none;

  &:focus,
  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }

  &.active {
    color: ${(p) => p.theme.colors.primary};
  }

  &.active::before {
    content: '';
    margin-right: ${(p) => p.theme.space[1]}rem;
    border-left: ${(p) => p.theme.borders[2]};
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

export const ButtonList = styled.ul`
  font-size: 2.8rem;
  margin-right: 4rem;
  min-width: 15rem;

  li + li {
    margin-top: ${(p) => p.theme.space[1]}rem;
  }
`;

export const Details = styled.ul`
  height: 80vh;

  li + li {
    margin-top: ${(p) => p.theme.space[1]}rem;
  }
`;

export const Duty = styled.li`
  display: flex;
`;
