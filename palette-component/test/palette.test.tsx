import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Palette } from '../src/palette';

describe('ボタンのイベントのテスト', () =>
{
    test('パレットの表示・非表示のテスト', () =>
    {
        render(<Palette />);
        const firstButton = screen.getByRole('button');
        fireEvent.click(firstButton);
        // パレットが展開されてボタンが2より多く表示されているはず
        expect(screen.queryAllByRole('button').length).toBeGreaterThan(2);

        fireEvent.click(firstButton);

        // パレットが閉じられてボタンは1つしか表示されていないはず
        expect(screen.queryAllByRole('button').length).toBe(1);
    })
});