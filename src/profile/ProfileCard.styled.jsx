import styled from "styled-components";

export const ProfileBox = styled.div`
    height: 300px;
    width: 250px;
    margin-right: auto;
    margin-left: auto;
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(194, 191, 191);
    background-color:  rgb(248, 248, 237);
`;

export const AvatarImg = styled.img`
    margin-top: 16px;
    border: 1px solid rgb(194, 191, 191);
    border-radius: 50%;
    width: 80px`;
    

export const DescriptionUserName = styled.p`
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
    `;

export const DescriptionUser = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
    color: grey;
    `;

export const StatsUser = styled.ul`
    display: flex;
    padding: 0;
    margin-bottom: 0;
    align-items: center;
    justify-content: end;
    width: 250px;
    `;

export const UserBox = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 17px;
    padding-top: 17px;
    gap: 3px;
    width: 33%;
    background-color: rgb(224, 221, 221);
    border: 1px solid rgb(194, 191, 191);
    `;

export const ProfileLabel = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
`;

export const ProfiQuantity = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    // margin-bottom: 16px;
    font-weight:bold
`;


