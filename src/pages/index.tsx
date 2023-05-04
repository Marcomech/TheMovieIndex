import React, { useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';

import MovieGrid from '@/components/movieGrid';
import GlobalLayout from "@/layouts";
import SearchButton from '../components/searchForm';
import { Title } from '@/constants/themes';
import InfoDialog from '@/components/detailDialog';


export default function Home() {
  const [keyword, setKeyword] = useState("")
  const [open, setOpen] = useState(false);
  const [movieData, setMovieData] = useState<Movie>(dataMc);

  const openDailog = () => { setOpen(true) };
  const addData = (movieData: Movie) => { setMovieData(movieData) }

  return (
    <GlobalLayout>
      <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} >
        <Title>The Movie Index</Title>
        <SearchButton stateChanger={setKeyword} />
      </Stack>
      < Box sx={{ flexGrow: 1 }} padding={2}>
        <MovieGrid
          query={keyword}
          openDialog={openDailog}
          addData={addData} />
      </Box>
      <InfoDialog
        open={open}
        onClose={(() => setOpen(false))}
        data={movieData}
      />
    </GlobalLayout >
  )
}

const dataMc: Movie = {
  backdrop_path: '',
  id: '',
  original_title: '',
  overview: '',
  poster_path: '',
  title: '',
  vote_average: '',
}