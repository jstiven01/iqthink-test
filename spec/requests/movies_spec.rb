require 'rails_helper'

RSpec.describe 'Movie API', type: :request do
  # initialize test data
  let!(:movies) { create_list(:movie, 10) }
  let(:movie_id) { movies.first.id }

  # Test suite for GET /movies
  describe 'GET /movies' do
    # make HTTP get request before each example
    before { get '/movies' }

    it 'returns movies' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /movies/:id
  describe 'GET /movies/:id' do
    before { get "/movies/#{movie_id}" }

    context 'when the record exists' do
      it 'returns the movie' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(movie_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:movie_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Movie/)
      end
    end
  end

  # Test suite for POST /movies
  describe 'POST /movies' do
    # valid payload
    let(:valid_attributes) do
      { title: 'Learn Elm', overview: 'Lorem Ipsum',
        votes: 52, poster_url: 'http//fake.url', release_date: '2020-01-01', mdb_id: 5 }
    end

    context 'when the request is valid' do
      before { post '/movies', params: valid_attributes }

      it 'creates a movie' do
        expect(json['title']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before do
        post '/movies', params: { title: 'Foobar',
                                  votes: 52, poster_url: 'http//fake.url', release_date: '2020-01-01' }
      end

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Overview can't be blank/)
      end
    end
  end
end
