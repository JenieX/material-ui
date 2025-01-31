import * as React from 'react';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

export default function TableTextEllipsis() {
  return (
    <Table
      aria-label="table with ellipsis texts"
      noWrap
      sx={{ mx: 'auto', width: 400 }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th style={{ width: '60%' }}>
            Description (you should see a part of this message)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Morty D Ardiousdellois Addami</td>
          <td>
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at
            velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta
            volutpat erat. Quisque erat eros, viverra eget, congue eget, semper
            rutrum, nulla.
          </td>
        </tr>
        <tr>
          <td>Joseph Morriso</td>
          <td>
            <Typography noWrap>
              <Link href="#text-ellipsis" startDecorator="ℹ️">
                In eleifend quam a odio
              </Link>
              . Suspendisse potenti in hac habitasse platea dictumst.
            </Typography>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
