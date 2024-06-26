import styled from '@emotion/styled';
import { map } from '@/constants/areas';

export default function ActivityArea({ areaCodes }: { areaCodes: number[] }) {
  return (
    <S.ActivityArea>
      {areaCodes?.map(code => {
        const item = map.get(code);
        return (
          <S.Area key={code}>
            <span>{item.si + ' ' + item.gu}</span>
          </S.Area>
        );
      })}
    </S.ActivityArea>
  );
}

const S = {
  ActivityArea: styled.div`
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  `,

  Area: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;

    padding: 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.color.primary};

    span {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: normal;
      color: ${({ theme }) => theme.color.primary};
    }

    img {
      cursor: pointer;
    }
  `,
};
