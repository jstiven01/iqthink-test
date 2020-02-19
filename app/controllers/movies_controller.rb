class MoviesController < ApplicationController
    
        before_action :set_movie, only: [:show, :update, :destroy]
      
        # GET /movies
        def index
          @movies = Movie.all
          json_response(@movies)
        end
      
        # POST /movies
        def create
          @movie = Movie.create!(movie_params)
          json_response(@movie, :created)
        end
      
        # GET /movies/:id
        def show
          json_response(@movie)
        end
      
      
        private
      
        def movie_params
          # whitelist params
          params.permit(:title, :overview, :votes, :poster_url, :release_date, :mdb_id)
        end
      
        def set_movie
          @movie = Movie.find(params[:id])
        end
end
