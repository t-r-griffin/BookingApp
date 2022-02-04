import React from 'react';
import GuestsModal from './GuestsModal';
import * as S from '../../../styles/Hotel/HotelFilter-styling';

function Guests() {
  const guestsModalRef = React.useRef();
  const applyButtonRef = React.useRef();
  const prevAdultsRef = React.useRef();
  const prevChildrenRef = React.useRef();
  const prevRoomsRef = React.useRef();
  const [guestsChanged, setGuestsChanged] = React.useState(false);
  const [count3, setCount3] = React.useState(0);
  const [guestsModal, setguestsModal] = React.useState(false);
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [rooms, setRooms] = React.useState(1);
  const [prevAdults, setPrevAdults] = React.useState(2);
  const [prevChildren, setPrevChildren] = React.useState(0);
  const [prevRooms, setPrevRooms] = React.useState(1);

  const changeRooms = event => {
    if (event.target.value > 6) {
      setRooms(6);
      return;
    }
    if (Number.isNaN(Number(event.target.value)) || event.target.value < 1) {
      setRooms(1);
      return;
    }
    setRooms(event.target.value);
  };

  const changeAdults = event => {
    if (
      event.target.value + children > 48 ||
      Number.isNaN(Number(event.target.value)) ||
      event.target.value < 1
    ) {
      setAdults(adults);
      return;
    }

    setAdults(event.target.value);
  };

  const changeChildren = event => {
    if (
      event.target.value + adults > 48 ||
      Number.isNaN(Number(event.target.value)) ||
      event.target.value < 1
    ) {
      setChildren(children);
      return;
    }

    setChildren(event.target.value);
  };

  React.useEffect(() => {
    if (count3) {
      const clickOutSideguestsModal = event => {
        if (
          (guestsModalRef.current &&
            !guestsModalRef.current.contains(event.target) &&
            guestsModal) ||
          applyButtonRef.current.contains(event.target)
        ) {
          setguestsModal(false);
          setGuestsChanged(false);
          prevAdultsRef.current = adults;
          prevChildrenRef.current = children;
          prevRoomsRef.current = rooms;
          setPrevAdults(prevAdultsRef.current);
          setPrevChildren(prevChildrenRef.current);
          setPrevRooms(prevRoomsRef.current);
        }
      };

      window.addEventListener('click', clickOutSideguestsModal);
      return () => window.removeEventListener('click', clickOutSideguestsModal);
    }
    return false;
  }, [count3]);

  return (
    <S.Item>
      <S.CheckIn
        ref={guestsModalRef}
        onClick={() => {
          setguestsModal(true);
          setCount3(count3 + 1);
        }}
      >
        <S.Grid>
          <S.DateIcon>
            <S.Icon icon="people" />
          </S.DateIcon>
          <S.SubGrid>
            <S.ButtonHead>{rooms} Room</S.ButtonHead>
            <S.ButtonLabel>
              {Number(adults) + Number(children)} Guests
            </S.ButtonLabel>
          </S.SubGrid>
          <S.PositionModal>
            {guestsModal ? (
              <GuestsModal>
                <S.ModalContent>
                  <S.Adults>Adults</S.Adults>
                  <S.AdultsQuantity>
                    <S.GuestButtons
                      onClick={() => {
                        if (!guestsChanged) {
                          setGuestsChanged(true);
                        }
                        setAdults(adults - 1);
                      }}
                      disabled={adults === 1}
                    >
                      <S.Icon icon="remove" clickableIcon />
                    </S.GuestButtons>
                    <S.GuestsInput
                      maxlength="2"
                      value={adults}
                      type="text"
                      onChange={event => changeAdults(event)}
                    />
                    <S.GuestButtons
                      disabled={adults + children === 48}
                      onClick={() => {
                        if (!guestsChanged) {
                          setGuestsChanged(true);
                        }
                        setAdults(adults + 1);
                      }}
                    >
                      <S.Icon icon="add" clickableIcon />
                    </S.GuestButtons>
                  </S.AdultsQuantity>
                  <S.Children>Children</S.Children>
                  <S.ChildrenQuantity>
                    <S.GuestButtons
                      onClick={() => {
                        if (!guestsChanged) {
                          setGuestsChanged(true);
                        }
                        setChildren(children - 1);
                      }}
                      disabled={children === 0}
                    >
                      <S.Icon icon="remove" clickableIcon />
                    </S.GuestButtons>
                    <S.GuestsInput
                      maxlength="2"
                      value={children}
                      type="text"
                      onChange={event => changeChildren(event)}
                    />
                    <S.GuestButtons
                      disabled={adults + children === 48}
                      onClick={() => {
                        if (!guestsChanged) {
                          setGuestsChanged(true);
                        }
                        setChildren(children + 1);
                      }}
                    >
                      <S.Icon icon="add" clickableIcon />
                    </S.GuestButtons>
                  </S.ChildrenQuantity>
                  <S.Rooms>Rooms</S.Rooms>
                  <S.RoomsQuantity>
                    <S.GuestButtons
                      onClick={() => {
                        if (!guestsChanged) {
                          setGuestsChanged(true);
                        }
                        setRooms(rooms - 1);
                      }}
                      disabled={rooms === 1}
                    >
                      <S.Icon icon="remove" clickableIcon />
                    </S.GuestButtons>
                    <S.GuestsInput
                      maxlength="2"
                      value={rooms}
                      onChange={event => changeRooms(event)}
                      type="text"
                    />
                    <S.GuestButtons
                      disabled={rooms === 6}
                      onClick={() => {
                        if (!guestsChanged) {
                          setGuestsChanged(true);
                        }
                        setRooms(rooms + 1);
                      }}
                    >
                      <S.Icon icon="add" clickableIcon />
                    </S.GuestButtons>
                  </S.RoomsQuantity>
                </S.ModalContent>
                <S.ModalButtons>
                  <S.ResetButton
                    disabled={!guestsChanged}
                    onClick={() => {
                      setGuestsChanged(false);
                      setAdults(prevAdults);
                      setChildren(prevChildren);
                      setRooms(prevRooms);
                    }}
                  >
                    Reset
                  </S.ResetButton>

                  <S.ApplyButton
                    ref={applyButtonRef}
                    onClick={() => setguestsModal(false)}
                  >
                    Apply
                  </S.ApplyButton>
                </S.ModalButtons>
              </GuestsModal>
            ) : null}
          </S.PositionModal>
        </S.Grid>
      </S.CheckIn>
    </S.Item>
  );
}

export default Guests;
