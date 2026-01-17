FROM ubuntu:22.04

ARG USERNAME=camper
ARG HOMEDIR=/workspace/project

ENV DEBIAN_FRONTEND=noninteractive

# Basic tools
RUN apt update && apt install -y \
  sudo \
  curl \
  git \
  nano \
  bash-completion \
  postgresql \
  postgresql-contrib \
  nodejs \
  npm

# Create user
RUN adduser --disabled-password --gecos '' ${USERNAME}
RUN adduser ${USERNAME} sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Prepare workspace
RUN mkdir -p ${HOMEDIR}
RUN chown -R ${USERNAME}:${USERNAME} /workspace

USER ${USERNAME}
WORKDIR ${HOMEDIR}

# Start postgres automatically
RUN sudo service postgresql start || true
