import HourInTimer from './HourInTimer';
import MinuteInTimer from './MinuteInTimer';
import DayTimeInTimer from './DayTimeInTimer';
import { TimeTypeInInterface, useDateSelect } from '@/hooks/zustand/useDateSelect';
import styled from '@emotion/styled';

export default function Timer() {
  const { startTime, finishTime, setStartTime, setFinishTime } = useDateSelect();

  return (
    <S.Container>
      <S.Timer>
        <S.TimerText>From</S.TimerText>
        <S.TimerContainer>
          <S.TimeText />
          <HourInTimer minTime={1} maxTime={12} time={startTime} setTime={setStartTime} />
          <S.TimeText>:</S.TimeText>
          <MinuteInTimer minTime={0} maxTime={59} time={startTime} setTime={setStartTime} />
          <DayTimeInTimer time={startTime} setTime={setStartTime} />
        </S.TimerContainer>
      </S.Timer>
      <S.Timer>
        <S.TimerText>To</S.TimerText>
        <S.TimerContainer>
          <S.TimeText />
          <HourInTimer minTime={1} maxTime={12} time={finishTime} setTime={setFinishTime} />
          <S.TimeText>:</S.TimeText>
          <MinuteInTimer minTime={0} maxTime={59} time={finishTime} setTime={setFinishTime} />
          <DayTimeInTimer time={finishTime} setTime={setFinishTime} />
        </S.TimerContainer>
      </S.Timer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2rem;
  `,
  Timer: styled.div`
    display: flex;
    gap: 8px;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
  `,

  TimerContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
    height: 6.2rem;
    flex-shrink: 0;
    border-radius: 0.4rem;
    background: #f3f4f6;
  `,

  TimerText: styled.span`
    color: #8b8d94;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.7rem;
    font-style: normal;
  `,

  TimeText: styled.span`
    color: #000;
    /* Header */
    flex: 1 1 auto;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
  `,
};