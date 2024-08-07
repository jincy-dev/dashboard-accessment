type Data = {
  headers: { [key: string]: string };
  data: {
    id: string;
    customer: string;
    orderNo: string;
    amount: string;
    status: string;
    image: string;
  }[];
};

export const data: Data = {
  headers: {
    customer: 'Customer',
    orderNo: 'Order No.',
    amount: 'Amount',
    status: 'Status',
  },
  data: [
    {
      id: '1',
      customer: 'John Doe',
      orderNo: 'OD-0001',
      amount: '$900',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/251?u=mail@ashallendesign.co.uk',
    },
    {
      id: '2',
      customer: 'James',
      orderNo: 'OD-0002',
      amount: '$800',
      status: 'Pending',
      image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      id: '3',
      customer: 'Jane Smith',
      orderNo: 'OD-0003',
      amount: '$700',
      status: 'Shipped',
      image: 'https://i.pravatar.cc/20?u=mail@ashallendesign.co.uk',
    },
    {
      id: '4',
      customer: 'Michael Johnson',
      orderNo: 'OD-0004',
      amount: '$600',
      status: 'Cancelled',
      image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      id: '5',
      customer: 'Emily Brown',
      orderNo: 'OD-0005',
      amount: '$500',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    },
    {
      id: '6',
      customer: 'Daniel Wilson',
      orderNo: 'OD-0006',
      amount: '$400',
      status: 'Pending',
      image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      id: '7',
      customer: 'Olivia Davis',
      orderNo: 'OD-0007',
      amount: '$300',
      status: 'Shipped',
      image: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    },
    {
      id: '8',
      customer: 'William Martinez',
      orderNo: 'OD-0008',
      amount: '$200',
      status: 'Delivered',
      image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      id: '9',
      customer: 'Sophia Anderson',
      orderNo: 'OD-0009',
      amount: '$100',
      status: 'Cancelled',
      image: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    },
    {
      id: '10',
      customer: 'Alexander Taylor',
      orderNo: 'OD-0010',
      amount: '$50',
      status: 'Pending',
      image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      id: '11',
      customer: 'Ava Thomas',
      orderNo: 'OD-0011',
      amount: '$25',
      status: 'Shipped',
      image: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    },
    {
      id: '12',
      customer: 'Mason Clark',
      orderNo: 'OD-0012',
      amount: '$10',
      status: 'Delivered',
      image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
  ],
};
